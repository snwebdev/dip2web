module.exports = function (order, province) {

    if (!order.legal) return false;


    switch (order.type) {

        case "Hold":
            if (order.unitLocation === province) {

                return true;
            }
            break;

        case "SupportHold":

            if (
                order.unitLocation === province ||
                order.supportedHoldProvinceName === province
            ) {
                return true;
            }
            break;

        case "Move":
            if (
                order.unitLocation === province ||
                order.moveToName === province
            ) {
                return true;
            }
            break;

        case "SupportMove":
            if (
                order.unitLocation === province ||
                order.supportMoveFromName === province ||
                order.supportMoveToName === province
            ) {
                return true;
            }
            break;
        case "Convoy":
            if (
                order.unitLocation === province ||
                order.convoyTo === province
            ) {
                return true;
            }
            break;

        default:
            return false;

    }

}