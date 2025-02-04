export const cardReducer = (state, action) => {
    let index = -1;
    if (action.payload) {
        index = state.cardItems.findIndex(x => x.id === action.payload.id);
    }

    switch (action.type) {
        case "ADD":
            if (index === -1) {
                return {
                    ...state,
                    cardItems: [...state.cardItems, { ...action.payload, quantity: 1 }]
                };
            } else {
                return {
                    ...state,
                    cardItems: state.cardItems.map((item, i) =>
                        i === index ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            }

        case "REMOVE":
            return {
                ...state,
                cardItems: state.cardItems.filter((_, i) => i !== index)
            };

        case "INCQTY":
            return {
                ...state,
                cardItems: state.cardItems.map((item, i) =>
                    i === index ? { ...item, quantity: item.quantity + 1 } : item
                )
            };

        case "DECQTY":
            return {
                ...state,
                cardItems: state.cardItems.map((item, i) =>
                    i === index && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            };

        case "CLEAR":
            return {
                ...state,
                cardItems: []
            };

        default:
            return state;
    }
};
