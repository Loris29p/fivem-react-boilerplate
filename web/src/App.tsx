import React from 'react';
import {debugData} from "./utils/debugData";
import { Switch, useHistory } from 'react-router-dom';
import {useNuiEvent} from "./hooks/useNuiEvent";

// This will set the NUI to visible if we are
// developing in browser
debugData([
    {
        action: 'setVisible',
        data: true,
    }
])

const App: React.FC = () => {
    const history = useHistory()
    useNuiEvent<string>('setPage', (page) => {
        history.push("/" + page)
    })

    return (
        <div className="app">
            <Switch>
                {/* <Route exact path="/" component={...} /> */}
            </Switch>
        </div>
    );
}

export default App;