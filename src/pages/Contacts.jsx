import { PhonebookForm } from '../components/PhonebookComponents/PhonebookForm/PhonebookForm';
import { ContactsList } from '../components/PhonebookComponents/ContactsList/ContactsList';
import { Filter } from '../components/PhonebookComponents/Filter/Filter';
import { Section } from '../components/Section/Section';
import { Notification } from '../components/PhonebookComponents/Notification/Notification';
import { useGetContactsQuery } from '../redux/contactsSlice';
import { TailSpin } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

export default function Contacts() {
  const { data, error, isLoading } = useGetContactsQuery();

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Section title="Add new contact">
        <PhonebookForm />
      </Section>

      {isLoading && (
        <Section>
          <TailSpin
            height="280"
            width="280"
            color="#e0a96d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            wrapperClass=""
            visible={true}
          />
        </Section>
      )}

      {error && (
        <Section>
          <Notification message="Oops, soomething went wrong"></Notification>
        </Section>
      )}

      {!isLoading && !error && data.length > 0 && (
        <>
          <Section title="Filter contacts">
            <Filter />
          </Section>

          <Section title="Saved contacts">
            <ContactsList />
          </Section>
        </>
      )}

      {!isLoading && !error && data.length === 0 && (
        <Section>
          <Notification message="There is no contacts in your contact list"></Notification>
        </Section>
      )}
    </>
  );
}
