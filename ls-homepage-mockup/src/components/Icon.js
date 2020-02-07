import React from "react";

export default function Icon(props) {
  return (
    <div key={props.key} style={{ margin: "1.5rem" }}>
      <a href={props.href}>
        <img
          class="img-responsive"
          src={props.src}
          alt=""
          style={{ borderRadius: "100%" }}
        />
      </a>
    </div>
  );
}
