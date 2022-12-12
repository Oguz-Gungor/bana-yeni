import Image from "next/image";


export default function IconWrapper({iconSize,style,className,image}){
    return <div
    className={"icon-button " + className}
    style={{ width: iconSize + 20, height:iconSize + 20, ...style}}
  >
    <Image
      src={image}
      width={iconSize}
      height={iconSize}
    />
  </div>
}