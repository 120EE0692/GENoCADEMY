export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Why to appear JEE",
      username: "Aashish",
      userId: "1",
      parentId: null,
      createdAt: "2022-01-18T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Why the earth is oval",
      username: "Swati",
      userId: "2",
      parentId: null,
      createdAt: "2022-01-18T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "U will get to know it once u graduate",
      username: "Abhas",
      userId: "2",
      parentId: "1",
      createdAt: "2022-01-18T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Coz it's not square",
      username: "Abhirup",
      userId: "2",
      parentId: "2",
      createdAt: "2022-01-18T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Abhas",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
