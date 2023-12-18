export type SilverStripePage = {
    __typename: string;
    id: string;
    title: string;
    className: string;
    elementalArea: {
      __typename: string;
      elements: {
        __typename: string;
        nodes: {
          __typename: string;
          title: string;
          className: string;
        }[];
      };
    };
  };

export type pageObject = {
    id: string;
    title: string;
    type: string;
    elementalArea: {
      elements: {
        nodes: {
          title: string;
          type: string;
        }[];
      };
    };
};