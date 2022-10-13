import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { setParams } from './settings'
import { useQuery } from 'react-query'

//getting the params from settings
const { BASE_URL, responseType, timeout: setTimeout, setToken } = setParams

// creating an axios instance
export const server = axios.create({
  baseURL: BASE_URL || '',
  responseType: responseType || 'json',
})

// creatin an axios interceptors
server.interceptors.request.use(
  async (config) => {
    let setHeader = ''
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      return config
    } else {
      return config
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)

//   axios GET function
export function Get({ method, url }) {
  const [info, setInfo] = useState({
    data: undefined,
    isSuccess: undefined,
    isLoading: true,
    isError: undefined,
    error: undefined,
  })

  useEffect(() => {
    async function GET() {
      try {
        await server
          .get(BASE_URL + url, { timeout: setTimeout })
          .then((response) => {
            setInfo({
              ...info,
              data: response,
              isSuccess: true,
              isLoading: false,
              isError: false,
            })
          })
      } catch (error) {
        setInfo({
          ...info,
          data: undefined,
          isSuccess: false,
          isLoading: false,
          isError: true,
          error,
        })
      }
    }
    GET()
  }, [])

  return { ...info }
}

// axios POST function
export function Post({ method, url, data }) {
  const [info, setInfo] = useState({
    data: undefined,
    isSuccess: undefined,
    isLoading: true,
    isError: undefined,
    error: undefined,
  })

  useEffect(() => {
    async function POST() {
      try {
        await server
          .post(
            BASE_URL + url,
            {
              ...data,
            },
            { timeout: setTimeout },
          )
          .then((response) => {
            setInfo({
              ...info,
              data: response,
              isSuccess: true,
              isLoading: false,
              isError: false,
            })
          })
      } catch (error) {
        setInfo({
          ...info,
          data: undefined,
          isSuccess: false,
          isLoading: true,
          isError: true,
          error,
        })
      }
    }
    POST()
  }, [])

  return { ...info }
}

// axios PATCH function
export function Patch({ method, url, data }) {
  const [info, setInfo] = useState({
    data: undefined,
    isSuccess: undefined,
    isLoading: true,
    isError: undefined,
    error: undefined,
  })

  useEffect(() => {
    async function PATCH() {
      try {
        await server
          .patch(
            BASE_URL + url,
            {
              data,
            },
            { timeout: setTimeout },
          )
          .then((response) => {
            setInfo({
              ...info,
              data: response,
              isSuccess: true,
              isLoading: false,
              isError: false,
            })
          })
      } catch (error) {
        setInfo({
          ...info,
          data: undefined,
          isSuccess: false,
          isLoading: true,
          isError: true,
          error,
        })
      }
    }
    PATCH()
  }, [])

  return { ...info }
}

// axios DELETE function
export function Delete({ method, url }) {
  const [info, setInfo] = useState({
    data: undefined,
    isSuccess: undefined,
    isLoading: true,
    isError: undefined,
    error: undefined,
  })

  useEffect(() => {
    async function DELETE() {
      try {
        await server
          .delete(BASE_URL + url, { timeout: setTimeout })
          .then((response) => {
            setInfo({
              ...info,
              data: response,
              isSuccess: true,
              isLoading: false,
              isError: false,
            })
          })
      } catch (error) {
        setInfo({
          ...info,
          data: undefined,
          isSuccess: false,
          isLoading: true,
          isError: true,
          error,
        })
      }
    }
    DELETE()
  }, [])

  return { ...info }
}

export function useFetch({ method, url, data }) {
  switch (method) {
    case 'GET':
      return Get({ method, url })

    case 'POST':
      return Post({ method, url, data })

    case 'PATCH':
      return Patch({ method, url, data })

    case 'DELETE':
      return Delete({ method, url })
  }
}
