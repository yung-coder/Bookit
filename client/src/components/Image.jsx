export default function ImageCustom({src,...rest}) {
    src = src && src.includes('https://')
      ? src
      : 'http://localhost:3000/uploads/'+src;
    return (
      <img {...rest} src={src} alt={''} />
    );
  }