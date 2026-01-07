import Image from "next/image";
import Header from "./common-component/Header";
import Mahdiehfarahani from "./ui/Mahdiehfarahani";
import Aboutme from "./ui/Aboutme";
import Creativeworks from "./ui/Creativeworks";
import Keeptouch from "./ui/Keeptouch";

export default function Home() {
  return (
    <>
    <Header/>
<Mahdiehfarahani/>
<Aboutme/>
<Creativeworks/>
<Keeptouch/>
    </>
     );
}
