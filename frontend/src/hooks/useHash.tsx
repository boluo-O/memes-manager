import { useCallback, useEffect, useState } from 'react'

const useHash = (): [string, (newHash: string) => void] => {
    const [hash, setHash] = useState(() => window.location.hash)

    useEffect(() => {
        const hashChangeHandler = () => {
            setHash(window.location.hash)
        }

        window.addEventListener('hashchange', hashChangeHandler)
        return () => {
            window.removeEventListener('hashchange', hashChangeHandler)
        }
    }, [])

    const updateHash = useCallback(
        (newHash: string) => {
            if (newHash !== hash) window.location.hash = newHash
        },
        [hash],
    )

    return [hash, updateHash]
}

export default useHash
