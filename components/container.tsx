import { ReactNode, FunctionComponent } from 'react';

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div
      className="container max-w-screen-xl mx-auto px-6 font-avenir"
      style={{ WebkitTapHighlightColor: 'rgba(255,255,255,0)' }}
    >
      {children}
    </div>
  );
};

export default Container;
