'use client'
 
import { useEffect } from 'react'
import { Stream } from "@cloudflare/stream-react";
 
export default function Example() {
  useEffect(() => {
    console.log('in useEffect')
  })
  return <p>Hello world</p>
}


export const App = () => {
  const videoIdOrSignedToken = "YOUR_VIDEO_ID_OR_SIGNED_TOKEN";
  return (
    <div>
      <Stream controls src={videoIdOrSignedToken} />
    </div>
  );
};