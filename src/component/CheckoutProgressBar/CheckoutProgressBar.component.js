import { PureComponent } from "react";
import "./CheckoutProgressBar.style";

class CheckoutProgressBar extends PureComponent {
  convertStepMap() {
    const { stepMap } = this.props;
    const convertedStepMap = [];
    for (const step in stepMap) {
      convertedStepMap.push({
        _id: step,
        title: stepMap[step].title.toString(),
      });
    }
    return convertedStepMap;
  }
  findCheckoutStepIndex(convertedStepMap) {
    const { checkoutStep } = this.props;
    for (let i = 0; i < convertedStepMap.length; i++)
      if (convertedStepMap[i]._id === checkoutStep) return i;
  }
  render() {
    const convertedStepMap = this.convertStepMap();
    const checkoutStepIndex = this.findCheckoutStepIndex(convertedStepMap);
    return (
      <div block="Checkout" elem="ProgressBar">
        {convertedStepMap.map((step, index) => (
          <span
            key={step._id}
            className={"bar " + (index <= checkoutStepIndex ? "active" : "")}
          >
            {index < convertedStepMap.length - 1 && (
              <span>
                {checkoutStepIndex > index ? (
                  <span className="circle">
                    <span className="check-mark"></span>
                  </span>
                ) : (
                  <span className="circle">{index + 1}</span>
                )}
                <span className="title">{step.title}</span>
              </span>
            )}
          </span>
        ))}
      </div>
    );
  }
}

export default CheckoutProgressBar;
