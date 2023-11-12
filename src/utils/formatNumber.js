export default function formatNumberToIDR(number) {
    const numberFormatter = new Intl.NumberFormat("id-ID");
    return numberFormatter.format(number);
  }
  