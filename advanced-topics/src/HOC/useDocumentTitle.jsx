import { useEffect } from "react";

function useDocumentTitle() {
  useEffect(() => {
    document.title = console.log("Clean up!");
  });
}

export default useDocumentTitle;
