import type { ReactNode, FunctionComponent } from 'react';

interface MainParagraphProps {
    children: ReactNode
}

const SubBarPrimary: FunctionComponent<MainParagraphProps> = ({ children }) => {
    return (
        <div className=' w-11/12 mx-auto my-6 bg-stone-900 p-2 text-white rounded font-light'>
            { children }
        </div>
    );
};

export default SubBarPrimary;
