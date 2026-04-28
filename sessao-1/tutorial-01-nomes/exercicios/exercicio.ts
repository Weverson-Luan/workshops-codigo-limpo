/**
 * EXERCÍCIO 01 — Nomes Significativos
 * Tempo estimado: 10 minutos
 * Referência: Clean Code, Cap. 2
 *
 * INSTRUÇÕES:
 *   Renomeie todas as variáveis, parâmetros, funções e interfaces abaixo
 *   para que os nomes revelem claramente a intenção do código.
 *   Não altere a lógica — apenas os nomes.
 *
 * Execute: npx ts-node exercicio.ts
 */

// ─── Problema 1 ───────────────────────────────────────────────────────────────
// O que este código calcula? Renomeie para tornar óbvio.

const x = 86400;
const y = 7;
const z = x * y;

function calculeteValueBetweenTwoNumbers(
  valueOne: number,
  valueTwo: number,
): number {
  return (valueOne * valueTwo) / 100;
}

// ─── Problema 2 ───────────────────────────────────────────────────────────────
// Esta classe gerencia um carrinho de compras.
// Renomeie tudo para refletir isso.

interface OrderItems {
  name_product: string;
  price: number;
}

class ShoopingCartManager {
  private orders: OrderItems[] = [];
  private countItem = 0;
  private total = 0;

  addProductToCart(name_product: string, price: number): void {
    this.orders.push({ name_product, price });
    this.countItem++;
    this.total += price;
  }

  removeProductToCart(name_product: string): void {
    this.orders = this.orders.filter(
      (item_product) => item_product.name_product !== name_product,
    );
    this.countItem = this.orders.length;
    this.total = this.orders.reduce((s, i) => s + i.price, 0);
  }

  getProducts(): OrderItems[] {
    return this.orders;
  }
  getTotal(): number {
    return this.total;
  }
}

// ─── Problema 3 ───────────────────────────────────────────────────────────────
// Esta função verifica se um usuário pode acessar um recurso.
// Renomeie os parâmetros e a função.

interface Users {
  nome: string;
  roles: string[];
}

function checkUserPermission(
  user: Users,
  resource: string,
  isAdmin: boolean,
): boolean {
  if (isAdmin) return true;
  return user.roles.includes(resource);
}

// ─── Verificação (não altere este bloco) ──────────────────────────────────────

console.log("=== Problema 1 ===");
console.log(`x=${x}, y=${y}, z=${z}`);
console.log(`calc(200, 10) = ${calculeteValueBetweenTwoNumbers(200, 10)}`);

console.log("\n=== Problema 2 ===");
const makeProduct = new ShoopingCartManager();
makeProduct.addProductToCart("Camiseta", 89.9);
makeProduct.addProductToCart("Calça", 159.9);
console.log("Itens:", makeProduct.getProducts());
console.log(`Total: R$ ${makeProduct}`);
makeProduct.removeProductToCart("Camiseta");
console.log(`Após remover Camiseta: R$ ${makeProduct}`);

console.log("\n=== Problema 3 ===");
const usuarios: Users = { nome: "João", roles: ["leitura", "escrita"] };
console.log("Acesso leitura:", checkUserPermission(usuarios, "leitura", false));
console.log("Acesso admin:  ", checkUserPermission(usuarios, "exclusao", true));
