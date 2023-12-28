# glassyPDM
glassyPDM is a PDM solution for teams looking to collaborate on hardware design.
## Support
Create a ticket [here](https://github.com/joshtenorio/glassypdm-client/issues).
## Dev Instructions
### Prerequisites
- Yarn classic. [link](https://classic.yarnpkg.com/en/docs/install#windows-stable)
- Windows computer setup for Tauri development. [link](https://tauri.app/v1/guides/getting-started/prerequisites)
- Clerk account setup. [link](https://clerk.com/)
- An instance of the glassyPDM [server](https://github.com/joshtenorio/glassypdm-server) and [webapp (WIP)](https://github.com/joshtenorio/glassypdm-web) running somewhere.
### CLI
```bash
# create clerk files
$ echo -n "PK_FROM_CLERK" >> src-tauri/resources/clerk.txt
$ echo -n "https://link.to.clerk.userprofile.example.com" >> src-tauri/resources/clerk-profile.txt

# for development
$ yarn tauri dev

# for building installers, etc.
$ yarn tauri build
```
### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## License
The glassyPDM client is released under the GNU General Public License (GPL) version 3 or later version.