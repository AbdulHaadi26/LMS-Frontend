import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FilledButton from "../../components/buttons/filled.button";
import { ColContainer, RowContainer } from "../../components/containers";
import { setSidebarTab } from "../../redux/actions/system.action";
import { ButtonActions, TabNames } from "../../utils/enum";
import { DispatchType } from "../../utils/types";
import AddInvoicesForm from "./form.invoices";

const InvoicesPage = () => {
  const [showAddInvoicePopup, setShowAddInvoicePopup] = useState(false);

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(setSidebarTab(TabNames.INVOICES));
  }, [dispatch]);

  return (
    <ColContainer className="w-full h-screen overflow-y-auto py-4 px-4">
      <AddInvoicesForm
        show={showAddInvoicePopup}
        setShow={setShowAddInvoicePopup}
      />

      <RowContainer className="w-full justify-end">
        <FilledButton
          onClick={() => setShowAddInvoicePopup(true)}
          type={ButtonActions.BUTTON}
          className="w-fit p-2 px-4 bg-primary-400 hover:bg-primary-300 text-white"
        >
          Create Invoice
          <span className="fa fa-plus-circle ml-2"></span>
        </FilledButton>
      </RowContainer>
    </ColContainer>
  );
};

export default InvoicesPage;
