public class Printer {
    private static Printer instance = new Printer();

    private Printer() {}

    public static Printer getInstance() {
        return instance;
    }

    public void print() {
        System.out.println("Printing document...");
    }

    public static void main(String[] args) {
        Printer p = Printer.getInstance();
        p.print();
    }
}
