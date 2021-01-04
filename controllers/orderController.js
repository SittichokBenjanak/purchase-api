exports.insert = async (req, res, next) => {
  try {
    const { item_list, total_discount, payment } = await req.body;

    const orderPrice = await item_list.reduce(
      (sumprice, item_lists) => sumprice + item_lists.price_per_item,
      0
    );

    const countNoItem = await item_list.filter((order) => order.qty < 1);
    const countNoPrice = await item_list.filter(
      (order) => order.price_per_item < 1
    );

    if (payment < orderPrice) {
      const error = new Error("จำนวนเงินไม่เพียงพอ");
      throw error;
    }

    if (item_list.length < 1) {
      const error = new Error("ไม่มีสินค้าอยู่ในตระกร้า");
      throw error;
    }

    if (countNoItem.length > 0) {
      const error = new Error("กรุณาเลือกสินค้า 1 ชิ้นขึ้นไป");
      throw error;
    }

    if (countNoPrice.length > 0) {
      const error = new Error("ราคาไม่ถูกต้อง");
      throw error;
    }

    res.status(200).json({
      Total_price: orderPrice,
      Change: payment - orderPrice,
    });
  } catch (error) {
    next(error);
  }
};
