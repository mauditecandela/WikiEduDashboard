import React from 'react';

const PleaseEnableEmail = () => {
  return (
    <div className="warning">
      <h2>Email is disabled for your Wikipedia account.</h2>
      <p>
        If you did not enter an email address when you created your Wikipedia
        account, you won't be able to reset your password if you lose it.
      </p>
      <p>
        Use the button below to open your Wikipedia preferences in a new tab,
        then continue here once you've added an email address and saved.
      </p>
      <p>
        (You can ignore this warning if you entered an email address but have
        not yet confirmed it, or if you disabled email from other users.)
      </p>
      <a className="button dark border" href="https://en.wikipedia.org/wiki/Special:Preferences" target="_blank">
        Open Wikipedia preferences
      </a>
    </div>
  );
};

export default PleaseEnableEmail;
