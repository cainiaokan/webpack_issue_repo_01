import React from 'react';
import { message, Button } from "antd";

const hoo = {
  props: (message, message2, message3) => {
    const message4 = null;
    console.log(message);
    console.log(message.a);
  }
};

export function Foo() {
  return (
    <div>123</div>
  );
}