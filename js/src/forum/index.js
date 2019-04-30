import app from "flarum/app";
import { override } from "flarum/extend";
import LoadingIndicator from "flarum/components/LoadingIndicator";

app.initializers.add("reflar/flarloader", () => {
  override(LoadingIndicator.prototype, "view", function() {
    const attrs = Object.assign({}, this.props);

    delete attrs.size;

    return (
      <div class="parent-block">
        <div class="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  });
  override(LoadingIndicator.prototype, "config", function() {
    return;
  });
});
