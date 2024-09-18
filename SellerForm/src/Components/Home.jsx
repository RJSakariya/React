import Appbar from "./AppBar";
import Products from "./Products";

// eslint-disable-next-line react/prop-types
export default function Home({ setLogin, name, setName, phone, setPhone, getColorForLetter, letter, detail, setDetail }) {
  return (
    <>
      <Appbar setLogin={setLogin} name={name} setName={setName} phone={phone} setPhone={setPhone} getColorForLetter={getColorForLetter} letter={letter} />
      <Products name={name} phone={phone} detail={detail} setDetail={setDetail} />
    </>
  )
}
