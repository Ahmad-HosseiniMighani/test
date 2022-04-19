import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "SourceComponent/ContentWrapper";
import CheckoutProgressBar from "Component/CheckoutProgressBar/CheckoutProgressBar.component";

class Checkout extends SourceCheckout {
  renderProgressBar() {
    const { checkoutStep } = this.props;
    return (
      <CheckoutProgressBar stepMap={this.stepMap} checkoutStep={checkoutStep} />
    );
  }
  render() {
    return (
      <main block="Checkout">
        {this.renderProgressBar()}
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
