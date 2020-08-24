const converted = {
  "#multi-background": {
    width: "100%",
    height: "100vh",
    backgroundColor: "#555",
    backgroundImage:
      "url('5.png'),\n                    url('4.png'),\n                    url('3.png'),\n                    url('2.png'),\n                    url('1.png')",
    backgroundSize: "100vw 100%",
    animation: "multi-background linear 100s infinite"
  },
  "@keyframes multi-background": {
    from: {
      backgroundPosition:
        "0px 0px,\n                         0px 0px,\n                         0px 0px,\n                         0px 0px,\n                         0px 0px"
    },
    to: {
      backgroundPosition:
        "7800px 0px,\n                         6500px 0px,\n                         5200px 0px,\n                         3900px 0px,\n                         2600px 0px"
    }
  }
};
