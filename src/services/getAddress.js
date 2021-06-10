export default function getAddress(setAddress, latitude, longitude) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
  )
    .then(res => res.json())
    .then(data => {
      const address = data.address
      const concatAddress =
        address.road +
        ' ' +
        address.house_number +
        ', ' +
        address.postcode +
        ' ' +
        address.state +
        ', ' +
        address.country
      setAddress(concatAddress)
    })
    .catch(error => {
      throw error
    })
}
