#!/bin/bash

# Define script locations
nerd_start_qml=~/.local/share/plasma/nerd_start.qml
nerd_end_qml=~/.local/share/plasma/nerd_end.qml
nerd_start_sh=~/.local/bin/nerd_start.sh
nerd_end_sh=~/.local/bin/nerd_end.sh

# Create QML files with content
echo "import QtQuick 2.15

Plasma.Component {
  onActivated: {
    var script = Shell.execute(\"${nerd_start_sh}\")
    if (script.exitCode != 0) {
      console.warn(\"Error running script:\", script.standardError)
    }
  }
}" > "$nerd_start_qml"

echo "import QtQuick 2.15

Plasma.Component {
  onActivated: {
    var script = Shell.execute(\"${nerd_end_sh}\")
    if (script.exitCode != 0) {
      console.warn(\"Error running script:\", script.standardError)
    }
  }
}" > "$nerd_end_qml"

# Create shell scripts with content
echo "#!/bin/bash

nerd-dictation start" > "$nerd_start_sh"

echo "#!/bin/bash

nerd-dictation end" > "$nerd_end_sh"

# Make scripts executable
chmod +x "$nerd_start_sh" "$nerd_end_sh"

echo "Created and made executable:
  * $nerd_start_qml
  * $nerd_end_qml
  * $nerd_start_sh
  * $nerd_end_sh"
