
const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer id='footer'>
      <p className="text-center pt-16 pb-4">Design by <span className="font-bold">nchrisdesigner</span> <span className="italic">©{year}</span></p>
    </footer>
  )
}

export default Footer