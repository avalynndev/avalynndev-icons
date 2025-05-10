import {window as Window} from 'vscode';

const MESSAGES = {
  CHANGELOG: {
    message: "AvalynnDev Icons was updated! Version ",
    // TODO Show changelog
    // message: 'AvalynnDev Icons was updated. Check the release notes for more details.',
    //options: {ok: 'Show me 📝', cancel: 'Maybe later ⏱'}
  },
  INSTALLATION: {
    message:
      "Thank you for using AvalynnDev Icons! Kindly support me buy donating on my github.",
    options: { ok: "Sure! 👌", cancel: "Nope 😢" },
  },
};

export const changelogMessage = async (iconsVersion: string): Promise<string | undefined> =>
  Window.showInformationMessage(
    MESSAGES.CHANGELOG.message + iconsVersion,
  );

export const installationMessage = async (): Promise<boolean> =>
  await Window.showInformationMessage(
    MESSAGES.INSTALLATION.message,
    MESSAGES.INSTALLATION.options.ok,
    MESSAGES.INSTALLATION.options.cancel
  ) === MESSAGES.INSTALLATION.options.ok;
