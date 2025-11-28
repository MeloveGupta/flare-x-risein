// components/sample.tsx
"use client"

import { useCardContract } from "@/hooks/useContract"
import { useAccount } from "wagmi"

const SampleIntegration = () => {
  const { isConnected } = useAccount()
  const { currentCard, actions, state } = useCardContract()

  const handleDraw = async () => {
    try {
      await actions.drawCard()
    } catch (err) {
      console.error(err)
    }
  }

  const handleReset = async () => {
    try {
      await actions.resetDeck()
    } catch (err) {
      console.error(err)
    }
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-foreground mb-3">Card Drawer</h2>
          <p className="text-muted-foreground">Please connect your wallet to interact with the contract.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-foreground mb-4">Card Drawer</h1>

        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-muted-foreground text-xs uppercase mb-2">Current Card Number</p>
          <p className="text-3xl font-semibold text-foreground">{currentCard}</p>
        </div>

        <button
          onClick={handleDraw}
          disabled={state.isLoading || state.isPending}
          className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium disabled:opacity-50"
        >
          {state.isLoading ? "Drawing..." : "Draw Card"}
        </button>

        <button
          onClick={handleReset}
          disabled={state.isLoading}
          className="w-full px-6 py-2 bg-destructive text-destructive-foreground rounded-lg font-medium disabled:opacity-50"
        >
          Reset Deck
        </button>

        {state.hash && (
          <div className="mt-6 p-4 bg-card border border-border rounded-lg">
            <p className="text-xs text-muted-foreground uppercase mb-2">Transaction Hash</p>
            <p className="text-sm font-mono break-all text-foreground">{state.hash}</p>
            {state.isConfirming && <p className="text-sm text-primary">Waiting for confirmation...</p>}
            {state.isConfirmed && <p className="text-sm text-green-500">Transaction confirmed!</p>}
          </div>
        )}

        {state.error && (
          <div className="mt-6 p-4 bg-card border border-destructive rounded-lg">
            <p className="text-sm text-destructive-foreground">Error: {state.error.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SampleIntegration
