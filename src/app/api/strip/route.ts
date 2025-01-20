// pages/api/checkout.ts
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe("your-secret-key-here", {
  apiVersion: "2024-12-18.acacia", // Replace with your Stripe API version
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { amount, items } = req.body;

      // Create a Checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: items.map((item: any) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100, // Amount in cents
          },
          quantity: item.quantity,
        })),
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      });

      res.status(200).json({ id: session.id });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
