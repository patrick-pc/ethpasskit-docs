import { useState } from 'react'
import { GeneratePass } from '@web3slinger/ethpasskit'

export const GeneratePassForm = () => {
  const [contractAddress, setContractAddress] = useState('')
  const [chainId, setChainId] = useState('')
  return (
    <div className="flex flex-wrap items-center w-full gap-4 mt-4">
      <div className="flex flex-1 flex-col gap-4">
        <input
          className="text-sm border rounded-lg dark:bg-dark px-4 py-2"
          type="text"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          placeholder="Contract Address"
          maxLength="42"
        />
        <input
          className="text-sm border rounded-lg dark:bg-dark px-4 py-2"
          type="text"
          value={chainId}
          onChange={(e) => setChainId(e.target.value)}
          placeholder="Chain ID"
          maxLength="5"
        />
        <GeneratePass
          settings={{
            apiUrl: '/api/ethpass/create',
            contractAddresses: [contractAddress],
            chainId: parseInt(chainId),
          }}
        />
      </div>
      <div className="flex flex-auto flex-col text-sm font-mono bg-primary-700/5 text-black dark:bg-primary-300/10 dark:text-white contrast-more:contrast-150 rounded-xl p-6">
        <span>
          {`<`}
          <span className="text-blue-600 dark:text-blue-400">{`GeneratePass`}</span>
        </span>
        <span className="ml-4">
          <span className="text-purple-600 dark:text-purple-400">apiUrl</span>
          <span className="text-red-600 dark:text-red-400">=</span>
          <span className="text-green-600 dark:text-green-400">"/api/ethpass/create"</span>
        </span>
        <span className="ml-4">
          <span className="text-purple-600 dark:text-purple-400">contractAddress</span>
          <span className="text-red-600 dark:text-red-400">=</span>
          <span className="text-green-600 dark:text-green-400">{`"${contractAddress}"`}</span>
        </span>
        <span className="ml-4">
          <span className="text-purple-600 dark:text-purple-400">chainId</span>
          <span className="text-red-600 dark:text-red-400">=</span>
          {`{`}
          <span className="text-blue-600 dark:text-blue-400">{chainId}</span>
          {`}`}
        </span>
        <span>{`/>`}</span>
      </div>
    </div>
  )
}
