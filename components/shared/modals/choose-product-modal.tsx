"use client";

import {Dialog, DialogContent} from "@/components/ui/dialog";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";
import {ChooseProductForm} from "../choose-product-form";
import {ProductWithRelations} from "@/@types/prisma";
import {ChoosePizzaForm} from "../choose-pizza-form";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal = ({product, className}: Props) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.items[0].pizzaType);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}>
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={""}
            name={""}
            ingredients={[]}
            items={[]}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={[]}
            items={[]}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
