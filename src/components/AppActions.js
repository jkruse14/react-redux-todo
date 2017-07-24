import React from 'react'

export const INCREMENT_NEXT_ID = 'INCREMENT_NEXT_ID';

export function incrementNextId() {
  return {
    type: INCREMENT_NEXT_ID
  }
}
