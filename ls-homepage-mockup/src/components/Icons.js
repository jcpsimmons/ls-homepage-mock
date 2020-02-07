import React, { Component } from "react";
import Icon from "./Icon.js";

export default class Icons extends Component {
  render() {
    const iconData = [
      {
        href: "#",
        src:
          "https://www.livingspaces.com/globalassets/images/home/2019/07/sofa-tile.jpg"
      },
      {
        href: "#",
        src:
          "https://www.livingspaces.com/globalassets/images/home/2019/07/bed-tile.jpg"
      },
      {
        href: "#",
        src:
          "https://www.livingspaces.com/globalassets/images/home/2019/07/dining-tile.jpg"
      },
      {
        href: "#",
        src:
          "https://www.livingspaces.com/globalassets/images/home/2019/07/tv-tile.jpg"
      },
      {
        href: "#",
        src:
          "https://www.livingspaces.com/globalassets/images/home/2019/07/sectional-tile.jpg"
      },
      {
        href: "#",
        src:
          "https://www.livingspaces.com/globalassets/images/home/2019/07/mattress-tile.jpg"
      },
      {
        href: "#",
        src:
          "https://www.livingspaces.com/globalassets/images/home/2019/07/chair-tile.jpg"
      },
      {
        href: "#",
        src:
          "https://www.livingspaces.com/globalassets/images/home/2019/07/desk-tile.jpg"
      }
    ];

    const iconItems = iconData.map((data, index) => {
      return <Icon href={data.href} src={data.src} key={index} />;
    });

    return (
      <div id="Icons">
        <div class="row">{iconItems}</div>
      </div>
    );
  }
}
