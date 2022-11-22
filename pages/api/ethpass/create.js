export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const { contractAddress, tokenId, chainId, ownerAddress } = req.query

        const response = await fetch(
          `https://api.ethpass.xyz/api/v0/passes?contractAddress=${contractAddress}&tokenId=${tokenId}&network=${chainId}&chain=${'evm'}&ownerAddress=${ownerAddress}&expired=${0}`,
          {
            method: 'GET',
            headers: new Headers({
              'content-type': 'application/json',
              'x-api-key': process.env.ETHPASS_API_KEY,
            }),
          }
        )

        if (response.status === 200) {
          const pass = await response.json()

          if (pass.length) {
            try {
              const response = await fetch(
                `https://api.ethpass.xyz/api/v0/passes/${pass[0].id}/distribute`,
                {
                  method: 'GET',
                  headers: new Headers({
                    'content-type': 'application/json',
                    'x-api-key': process.env.ETHPASS_API_KEY,
                  }),
                }
              )

              if (response.status === 200) {
                const json = await response.json()
                return res.status(200).json({ ...json, platform: pass[0].platform })
              } else {
                throw Error
              }
            } catch (error) {
              return res.status(400).send(error.message)
            }
          } else {
            return res.status(200).json(pass)
          }
        } else {
          const json = await response.json()
          return res.status(response.status).send(json.message)
        }
      } catch (error) {
        return res.status(400).send(error.message)
      }

    case 'POST':
      try {
        const { contractAddress, tokenId, chainId, platform, signature, signatureMessage } =
          req.body

        // Customize Pass
        let pass
        if (platform === 'apple') {
          pass = {
            labelColor: 'rgb(78,70,220)',
            backgroundColor: 'rgb(255,255,255)',
            foregroundColor: 'rgb(0,0,0)',
            description: 'This is a demo pass using ethpass.',
            auxiliaryFields: [],
            backFields: [],
            headerFields: [],
            primaryFields: [
              {
                key: 'primary1',
                label: 'ethpasskit',
                value: 'Demo Pass',
                textAlignment: 'PKTextAlignmentNatural',
              },
            ],
            secondaryFields: [
              {
                key: 'secondary1',
                label: 'CONTRACT ADDRESS',
                value: `${contractAddress.slice(0, 6)}...${contractAddress.slice(-4)}`,
                textAlignment: 'PKTextAlignmentLeft',
              },
              {
                key: 'secondary2',
                label: 'TOKEN ID',
                value: tokenId,
                textAlignment: 'PKTextAlignmentLeft',
              },
              {
                key: 'secondary3',
                label: 'NETWORK',
                value: 'Polygon',
                textAlignment: 'PKTextAlignmentLeft',
              },
            ],
          }
        } else {
          pass = {
            messages: [],
          }
        }

        // Request to create pass
        const payload = await fetch('https://api.ethpass.xyz/api/v0/passes', {
          method: 'POST',
          body: JSON.stringify({
            chain: {
              name: 'evm',
              network: chainId,
            },
            nft: {
              contractAddress,
              tokenId,
            },
            pass,
            platform,
            signature,
            signatureMessage,
            barcode: {
              message: 'Payload returned after successfully scanning a pass',
            },
            image: '',
          }),
          headers: new Headers({
            'content-type': 'application/json',
            'x-api-key': process.env.ETHPASS_API_KEY,
          }),
        })

        if (payload.status === 200) {
          const json = await payload.json()
          return res.status(200).json(json)
        } else {
          const json = await payload.json()
          return res.status(payload.status).send(json.message)
        }
      } catch (error) {
        return res.status(400).send(error.message)
      }

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      break
  }
}
