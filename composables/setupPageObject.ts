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

export type Page = {
    id: string;
    title: string;
    type: string;
    elementalArea: {
      elements: {
        title: string;
        type: string;
      }[];
    };
  };

export default function transformPage(originalObject: SilverStripePage):Page {
    const { __typename, className, ...rest } = originalObject;

    const transformedObject: Page = {
        ...rest,
        type: className,
        elementalArea: {
            elements: originalObject.elementalArea.elements.nodes.map((node) => ({
            title: node.title,
            type: node.className,
            })),
        },
    };

    return transformedObject;
  }