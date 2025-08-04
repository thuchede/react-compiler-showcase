import {ParentComponent} from "./components/Parent.tsx";
import {MemoParentComponent} from "./components/MemoParent.tsx";
import {UseCallbackParentComponent} from "./components/UseCallbackParent.tsx";
import {UseMemoParentComponent} from "./components/UseMemoParent.tsx";
import {CompilerParentComponent} from "./components/CompilerParent.tsx";
import './App.css'

function App() {
  return (
    <>
        <div className="card">
            <ParentComponent />
            {/*<MemoParentComponent />*/}
            {/*<UseCallbackParentComponent />*/}
            {/*<UseMemoParentComponent />*/}
            {/*<CompilerParentComponent />*/}
        </div>
    </>
  )
}

export default App
