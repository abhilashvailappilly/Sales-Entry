import { ReactNode } from 'react';

export default function Modal({ children, onClick }: { children: ReactNode, onClick: () => void }) {

  return (
    <>
      <div className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-zinc-900/80 z-50">
        <div className="w-3/4 h-3/4 bg-zinc-950/90 relative rounded-md shadow-lg p-4">
          {/* Close button now correctly calls onClick to close the modal */}
          <button
            onClick={onClick}
            className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-zinc-900"
          >
            x
          </button>
          <div className="text-white p-4">
            <h2 className="text-xl mb-4">Modal Title</h2>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
