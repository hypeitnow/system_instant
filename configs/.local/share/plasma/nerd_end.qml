import QtQuick 2.15

Plasma.Component {
    onActivated: {
        // Replace with your script path
        var script = Shell.execute("/home/hypeit/.local/bin/nerd_end.sh")
        if (script.exitCode != 0) {
            console.warn("Error running script:", script.standardError)
        }
    }
}
