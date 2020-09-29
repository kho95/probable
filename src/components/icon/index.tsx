import React, { lazy, Suspense } from 'react'; // importing FunctionComponent

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }: IconProps): React.ReactElement => {
  const DynamicIcon = lazy((): Promise<any> => import(`../../assets/icons/${name}.tsx`));
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <DynamicIcon />
    </Suspense>
  );
};

export default Icon;
