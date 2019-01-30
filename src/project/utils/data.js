export var menuList = [
  {
    name: "Home Page",
    icon: "mail",
    url: "index"
  },
  {
    name: "Music",
    icon: "appstore",
    url: "music",
    children: [
      {
        name: "Music List",
        url: "music"
      }
    ]
  },
  {
    name: "Tools",
    icon: "setting",
    url: "tools",
    children: [
      {
        name: "Applications",
        url: "tools"
      },
      {
        name: "Editors",
        url: "editor"
      },
      {
        name: "To-do Lists",
        url: "todo"
      }
    ]
  },
  {
    name: "Art Gallery",
    icon: "pie-chart",
    url: "pic",
    children: [
      {
        name: "pictures",
        url: "pic"
      }
    ]
  }
];
