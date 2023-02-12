import logo from './logo.svg';
import './App.css';
import AISDialogViewController, {dialogActionView} from "@appinsource/material/dynamic-dialog"

function App() {

    const dynamicDialog = () => {
        const closeAction = new dialogActionView()
            .setLabel("Close")
            .setAction((button, modal1) => {
                modal1.close();
            });

        const updateAction = new dialogActionView()
            .setLabel("Update")
            .setVariant("contained")
            .setColor("warning")
            .setAction((button, dialog) => {
                // Update Dialog content
                dialog.setContent("Dialog Content updated with this text");
                // Update updateAction
                button.setInProcess(true).setDisabled(true).setColor("success");

                setTimeout(() => {
                    dialog.setContent("Dialog Content updated again with this text");
                    button
                        .setLabel("Ok!")
                        .setDisabled(false)
                        .setInProcess(false)
                        .setVariant("text");
                    closeAction.setVariant('contained').setColor('success');
                    button.setAction((button1, dialog1) => {
                        dialog1.setContent(
                            "3. time Dialog Content updated, and changed again in 5 sec."
                        );
                        dialog1.setTitle('Changed Title to...');
                        button1.setLabel("Inline Clicked").setDisabled(true);
                        setTimeout(() => {
                            dialog1.setContent(
                                "last time Dialog updatged and closing in 3 sec"
                            );
                            button1
                                .setColor("warning")
                                .setDisabled(false)
                                .setAction((button, dialog) => {
                                    dialog1.close();
                                });
                            setTimeout(() => {
                                dialog1.close();
                            }, 3000);
                        }, 5000);
                    });
                }, 3000);
            });
        const dialog = new AISDialogViewController();
        dialog
            .setTitle("I'm a dynamic dialog view")
            .setDraggable(true)
            .setContent("Inital Content")
            .setAction(closeAction)
            .setAction(updateAction)
            .setMaxWidth("md")
            .show((modal, component) => {});
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          onClick={ dynamicDialog }
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
