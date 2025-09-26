const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  QueQUESTION: (id: string) => `/question/${id}`,
  TAGS: (id: string) => `/text/${id}`,
};

export default ROUTES;
