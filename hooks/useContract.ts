// hooks/useContract.ts
"use client"

import { useState, useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export interface ContractState {
  isLoading: boolean
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  hash: `0x${string}` | undefined
  error: Error | null
}

export interface ContractActions {
  drawCard: () => Promise<void>
  resetDeck: () => Promise<void>
}

export const useCardContract = () => {
  const { address } = useAccount()
  const [isLoading, setIsLoading] = useState(false)

  const { data: currentCard, refetch: refetchCard } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "cardNumber",
  })

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })

  useEffect(() => {
    if (isConfirmed) {
      refetchCard()
    }
  }, [isConfirmed, refetchCard])

  const drawCard = async () => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "drawCard",
      })
    } catch (err) {
      console.error("Error drawing card:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const resetDeck = async () => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "resetDeck",
      })
    } catch (err) {
      console.error("Error resetting deck:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const actions: ContractActions = { drawCard, resetDeck }

  const state: ContractState = {
    isLoading: isLoading || isPending || isConfirming,
    isPending,
    isConfirming,
    isConfirmed,
    hash,
    error,
  }

  return {
    currentCard: currentCard ? Number(currentCard as unknown as bigint) : 0,
    actions,
    state,
  }
}
