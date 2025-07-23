import { useEffect } from 'react'

const JsonLd = ({ data }) => {
  useEffect(() => {
    if (!data) return

    // Remove any existing JSON-LD scripts from this component
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-dynamic]')
    existingScripts.forEach(script => script.remove())

    // Create new script element
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-dynamic', 'true')
    script.textContent = JSON.stringify(data)
    
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-dynamic]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [data])

  return null
}

export default JsonLd 