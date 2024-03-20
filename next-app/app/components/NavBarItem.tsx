import Link from "next/link";
import Image from "next/image";

type Props = {
  pageTitle : string,
  pageRoute: string,
  pageIcon: string
}
export default function NavBarItem(props: Props) {
  
  return (
    <Link href={props.pageRoute}>
      <Image
        src={props.pageIcon}
        alt={props.pageTitle}
        width={50}
        height={50}
      />
    </Link>
  )
}