import React from "react";
import ModalProvider from "./components/modal/ModalProvider";
import ModalTrigger from "./components/modal/ModalTrigger";

function App() {
  return (
    <>
      <ModalProvider>
        <main>
          <ModalTrigger />
        </main>
      </ModalProvider>
    </>
  );
}

export default App;
