   function mod(taban, üs, modül) {
        return BigInt(taban) ** BigInt(üs) % BigInt(modül);
    }

    function genişletilmişEKOK(a, b) {
        if (a === 0n) {
            return [b, 0n, 1n];
        } else {
            const [g, x, y] = genişletilmişEKOK(b % a, a);
            return [g, y - (b / a) * x, x];
        }
    }

    function modTersi(a, m) {
        const [g, x] = genişletilmişEKOK(a, m);
        if (g !== 1n) {
            throw new Error("Modüler ters yok");
        } else {
            return (x % m + m) % m;
        }
    }

    let p, g, a, m, k, c1, c2;

    function generateKeys() {
        p = BigInt(document.getElementById("p").value);
        g = BigInt(document.getElementById("g").value);
        a = BigInt(document.getElementById("a").value);
        m = BigInt(document.getElementById("m").value);

        const A = mod(g, a, p);
        alert(`Genel Anahtar (pk): (${p}, ${g}, ${A})`);
    }

    function encrypt() {
        k = BigInt(document.getElementById("k").value);
        c1 = mod(g, k, p);
        const A = mod(g, a, p);
        c2 = (mod(m, 1n, p) * mod(A, k, p)) % p;

        document.getElementById("c1").value = c1.toString();
        document.getElementById("c2").value = c2.toString();
    }

    function decrypt() {
        const x = mod(c1, a, p);
        const xInverse = modTersi(x, p);
        const decryptedMessage = (c2 * xInverse) % p;

        alert(`Çözülen Mesaj: ${decryptedMessage}`);
    }