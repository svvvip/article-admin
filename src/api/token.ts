import { request } from '@/api/request.ts'

export interface Token{
  id: number
  token_key: string
  token_value: string
}

export function listToken() {
  return request<Token[]>({ url: '/tokens/' })
}

export function deleteToken(token_id: number) {
  return request({ url: `/tokens/${token_id}`, method: 'delete' })
}


export function addToken(key: string) {
  return request({ url: `/tokens/?key=${key}`, method: 'post' })
}